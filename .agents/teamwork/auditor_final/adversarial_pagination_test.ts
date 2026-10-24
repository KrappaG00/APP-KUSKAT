import assert from 'node:assert';

function computePagination(totalItems: number, itemsPerPage: number, requestedPage: number) {
  if (totalItems <= 0) {
    return { totalPages: 0, validCurrentPage: 1, startItem: 0, endItem: 0, sliceCount: 0 };
  }
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const validCurrentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const sliceCount = Math.max(0, endIndex - startIndex);
  const startItem = totalItems === 0 ? 0 : startIndex + 1;
  const endItem = endIndex;
  return { totalPages, validCurrentPage, startItem, endItem, sliceCount };
}

console.log('--- STARTING ADVERSARIAL STRESS TEST: PAGINATION LOGIC ---');

// 1. Extreme boundary: 0 items
const res0 = computePagination(0, 10, 1);
assert.strictEqual(res0.totalPages, 0);
assert.strictEqual(res0.sliceCount, 0);
assert.strictEqual(res0.startItem, 0);
assert.strictEqual(res0.endItem, 0);
console.log('✔ Case 1: 0 items boundary passed');

// 2. Negative page number
const resNeg = computePagination(200, 10, -5);
assert.strictEqual(resNeg.validCurrentPage, 1);
assert.strictEqual(resNeg.startItem, 1);
assert.strictEqual(resNeg.endItem, 10);
assert.strictEqual(resNeg.sliceCount, 10);
console.log('✔ Case 2: Negative page clamping passed');

// 3. Overflow page number (page 999 on 200 items)
const resOver = computePagination(200, 10, 999);
assert.strictEqual(resOver.validCurrentPage, 20);
assert.strictEqual(resOver.startItem, 191);
assert.strictEqual(resOver.endItem, 200);
assert.strictEqual(resOver.sliceCount, 10);
console.log('✔ Case 3: Overflow page clamping passed');

// 4. Non-divisible counts (e.g. ANSP Cabo: 66 items with pageSize 10)
const totalPages66 = Math.ceil(66 / 10);
assert.strictEqual(totalPages66, 7);
for (let p = 1; p <= 6; p++) {
  const res = computePagination(66, 10, p);
  assert.strictEqual(res.sliceCount, 10);
}
const lastPage = computePagination(66, 10, 7);
assert.strictEqual(lastPage.sliceCount, 6);
assert.strictEqual(lastPage.startItem, 61);
assert.strictEqual(lastPage.endItem, 66);
console.log('✔ Case 4: Non-divisible counts (66 items) passed');

// 5. Block size 20 (e.g. 67 items with pageSize 20)
const totalPages67 = Math.ceil(67 / 20);
assert.strictEqual(totalPages67, 4);
const p4 = computePagination(67, 20, 4);
assert.strictEqual(p4.sliceCount, 7);
assert.strictEqual(p4.startItem, 61);
assert.strictEqual(p4.endItem, 67);
console.log('✔ Case 5: Block size 20 partition passed');

// 6. Partition coverage: Sum of slices across all pages equals totalItems
const datasets = [200, 150, 50, 66, 67, 40, 38, 37, 30, 1];
const pageSizes = [10, 20];

for (const total of datasets) {
  for (const size of pageSizes) {
    const pages = Math.ceil(total / size);
    let collectedIndices: number[] = [];

    for (let p = 1; p <= pages; p++) {
      const res = computePagination(total, size, p);
      for (let i = res.startItem; i <= res.endItem; i++) {
        collectedIndices.push(i);
      }
    }

    assert.strictEqual(collectedIndices.length, total);
    assert.strictEqual(new Set(collectedIndices).size, total);
    assert.strictEqual(collectedIndices[0], 1);
    assert.strictEqual(collectedIndices[total - 1], total);
  }
}
console.log('✔ Case 6: Exhaustive partition coverage passed for all datasets and block sizes');
console.log('--- ALL ADVERSARIAL PAGINATION STRESS TESTS PASSED CLEANLY ---');

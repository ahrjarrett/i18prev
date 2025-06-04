import * as path from 'node:path'

export const BENCHMARKS_DIR = path.join(path.resolve(), 'benchmarks')

export const PATH = {
  benchmarkTranslations: {
    2: path.join(BENCHMARKS_DIR, 'depth-02', 'bench', '__generated__'),
    3: path.join(BENCHMARKS_DIR, 'depth-03', 'bench', '__generated__'),
    4: path.join(BENCHMARKS_DIR, 'depth-04', 'bench', '__generated__'),
    5: path.join(BENCHMARKS_DIR, 'depth-05', 'bench', '__generated__'),
    6: path.join(BENCHMARKS_DIR, 'depth-06', 'bench', '__generated__'),
    7: path.join(BENCHMARKS_DIR, 'depth-07', 'bench', '__generated__'),
    8: path.join(BENCHMARKS_DIR, 'depth-08', 'bench', '__generated__'),
    9: path.join(BENCHMARKS_DIR, 'depth-09', 'bench', '__generated__'),
  },
  testTranslations: {
    2: path.join(BENCHMARKS_DIR, 'depth-02', 'test', '__generated__'),
    3: path.join(BENCHMARKS_DIR, 'depth-03', 'test', '__generated__'),
    4: path.join(BENCHMARKS_DIR, 'depth-04', 'test', '__generated__'),
    5: path.join(BENCHMARKS_DIR, 'depth-05', 'test', '__generated__'),
    6: path.join(BENCHMARKS_DIR, 'depth-06', 'test', '__generated__'),
    7: path.join(BENCHMARKS_DIR, 'depth-07', 'test', '__generated__'),
    8: path.join(BENCHMARKS_DIR, 'depth-08', 'test', '__generated__'),
    9: path.join(BENCHMARKS_DIR, 'depth-09', 'test', '__generated__'),
  },
  benchmark: {
    2: path.join(BENCHMARKS_DIR, 'depth-02', 'bench', 'types.bench.ts'),
    3: path.join(BENCHMARKS_DIR, 'depth-03', 'bench', 'types.bench.ts'),
    4: path.join(BENCHMARKS_DIR, 'depth-04', 'bench', 'types.bench.ts'),
    5: path.join(BENCHMARKS_DIR, 'depth-05', 'bench', 'types.bench.ts'),
    6: path.join(BENCHMARKS_DIR, 'depth-06', 'bench', 'types.bench.ts'),
    7: path.join(BENCHMARKS_DIR, 'depth-07', 'bench', 'types.bench.ts'),
    8: path.join(BENCHMARKS_DIR, 'depth-08', 'bench', 'types.bench.ts'),
    9: path.join(BENCHMARKS_DIR, 'depth-09', 'bench', 'types.bench.ts'),
  },
  test: {
    2: path.join(BENCHMARKS_DIR, 'depth-02', 'test', 'suite.test.ts'),
    3: path.join(BENCHMARKS_DIR, 'depth-03', 'test', 'suite.test.ts'),
    4: path.join(BENCHMARKS_DIR, 'depth-04', 'test', 'suite.test.ts'),
    5: path.join(BENCHMARKS_DIR, 'depth-05', 'test', 'suite.test.ts'),
    6: path.join(BENCHMARKS_DIR, 'depth-06', 'test', 'suite.test.ts'),
    7: path.join(BENCHMARKS_DIR, 'depth-07', 'test', 'suite.test.ts'),
    8: path.join(BENCHMARKS_DIR, 'depth-08', 'test', 'suite.test.ts'),
    9: path.join(BENCHMARKS_DIR, 'depth-09', 'test', 'suite.test.ts'),
  },
} as const

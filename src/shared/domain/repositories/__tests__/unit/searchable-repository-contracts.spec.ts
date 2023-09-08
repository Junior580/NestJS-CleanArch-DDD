import {
  SearchParams,
  SearchResult,
} from '../../searchable-repository-contracts';

describe('Searchable reposirotry unit tests', () => {
  describe('SearchParams tests', () => {
    it('Page props', () => {
      const sut = new SearchParams();
      expect(sut.page).toBe(1);

      const params = [
        { page: null as any, expected: 1 },
        { page: undefined as any, expected: 1 },
        { page: '' as any, expected: 1 },
        { page: 'teste' as any, expected: 1 },
        { page: 0 as any, expected: 1 },
        { page: -1 as any, expected: 1 },
        { page: 5.5 as any, expected: 1 },
        { page: true as any, expected: 1 },
        { page: false as any, expected: 1 },
        { page: {} as any, expected: 1 },
        { page: 1 as any, expected: 1 },
        { page: 2 as any, expected: 2 },
      ];

      params.forEach(item => {
        expect(new SearchParams({ page: item.page }).page).toBe(item.expected);
      });
    });

    it('perPage props', () => {
      const sut = new SearchParams();
      expect(sut.perPage).toBe(15);

      const params = [
        { perPage: null as any, expected: 15 },
        { perPage: undefined as any, expected: 15 },
        { perPage: '' as any, expected: 15 },
        { perPage: 'teste' as any, expected: 15 },
        { perPage: 0 as any, expected: 15 },
        { perPage: -1 as any, expected: 15 },
        { perPage: 5.5 as any, expected: 15 },
        { perPage: true as any, expected: 15 },
        { perPage: false as any, expected: 15 },
        { perPage: {} as any, expected: 15 },
        { perPage: 1 as any, expected: 1 },
        { perPage: 2 as any, expected: 2 },
        { perPage: 25 as any, expected: 25 },
      ];

      params.forEach(item => {
        expect(new SearchParams({ perPage: item.perPage }).perPage).toBe(
          item.expected,
        );
      });
    });

    it('sort props', () => {
      const sut = new SearchParams();
      expect(sut.sort).toBeNull();

      const params = [
        { sort: null as any, expected: null },
        { sort: undefined as any, expected: null },
        { sort: '' as any, expected: null },
        { sort: 'teste', expected: 'teste' },
        { sort: 0 as any, expected: '0' },
        { sort: -1 as any, expected: '-1' },
        { sort: 5.5 as any, expected: '5.5' },
        { sort: true as any, expected: 'true' },
        { sort: false as any, expected: 'false' },
        { sort: {} as any, expected: '[object Object]' },
        { sort: 1 as any, expected: '1' },
        { sort: 2 as any, expected: '2' },
        { sort: 25 as any, expected: '25' },
      ];

      params.forEach(item => {
        expect(new SearchParams({ sort: item.sort }).sort).toBe(item.expected);
      });
    });

    it('sortDir props', () => {
      let sut = new SearchParams();
      expect(sut.sortDir).toBeNull();

      sut = new SearchParams({ sort: null });
      expect(sut.sortDir).toBeNull();

      sut = new SearchParams({ sort: undefined });
      expect(sut.sortDir).toBeNull();

      sut = new SearchParams({ sort: '' });
      expect(sut.sortDir).toBeNull();

      const params = [
        { sortDir: null as any, expected: 'desc' },
        { sortDir: undefined as any, expected: 'desc' },
        { sortDir: '' as any, expected: 'desc' },
        { sortDir: 'teste', expected: 'desc' },
        { sortDir: 0 as any, expected: 'desc' },
        { sortDir: 'asc', expected: 'asc' },
        { sortDir: 'desc', expected: 'desc' },
        { sortDir: 'ASC' as any, expected: 'asc' },
        { sortDir: 'DESC' as any, expected: 'desc' },
      ];

      params.forEach(item => {
        expect(
          new SearchParams({ sort: 'field', sortDir: item.sortDir }).sortDir,
        ).toBe(item.expected);
      });
    });

    it('filter props', () => {
      const sut = new SearchParams();
      expect(sut.filter).toBeNull();

      const params = [
        { filter: null as any, expected: null },
        { filter: undefined as any, expected: null },
        { filter: '' as any, expected: null },
        { filter: 'teste', expected: 'teste' },
        { filter: 0 as any, expected: '0' },
        { filter: -1 as any, expected: '-1' },
        { filter: 5.5 as any, expected: '5.5' },
        { filter: true as any, expected: 'true' },
        { filter: false as any, expected: 'false' },
        { filter: {} as any, expected: '[object Object]' },
        { filter: 1 as any, expected: '1' },
        { filter: 2 as any, expected: '2' },
        { filter: 25 as any, expected: '25' },
      ];

      params.forEach(item => {
        expect(new SearchParams({ filter: item.filter }).filter).toBe(
          item.expected,
        );
      });
    });
  });

  describe('SearchResult tests', () => {
    it('constructor props', () => {
      let sut = new SearchResult({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        sort: null,
        sortDir: null,
        filter: null,
      });

      expect(sut.toJSON()).toStrictEqual({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        lastPage: 2,
        sort: null,
        sortDir: null,
        filter: null,
      });

      sut = new SearchResult({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });

      expect(sut.toJSON()).toStrictEqual({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        lastPage: 2,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });

      sut = new SearchResult({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });

      expect(sut.toJSON()).toStrictEqual({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 2,
        lastPage: 2,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });

      sut = new SearchResult({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 4,
        currentPage: 1,
        perPage: 10,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });
      expect(sut.lastPage).toBe(1);

      sut = new SearchResult({
        items: ['teste1', 'teste2', 'teste3', 'teste4'] as any,
        total: 54,
        currentPage: 1,
        perPage: 10,
        sort: 'name',
        sortDir: 'asc',
        filter: 'teste',
      });
      expect(sut.lastPage).toBe(6);
    });
  });
});

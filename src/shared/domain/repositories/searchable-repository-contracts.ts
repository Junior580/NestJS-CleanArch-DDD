import { Entity } from '../entities/entity';
import { RepositoryInterface } from './repository-contracts';

export type SortDirection = 'asc' | 'desc';

export type SearchProps<Filter = string> = {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: Filter | null;
};

<<<<<<< HEAD
export type SearchResultProps<E extends Entity, Filter> = {
  items: E[];
  total: number;
  currentPage: number;
  perPage: number;
  sort: string | null;
  sortDir: string | null;
  filter: Filter | null;
};

=======
>>>>>>> b06d353ddd12893135f3aa99825e5fa77d782e98
export class SearchParams {
  protected _page: number;
  protected _perPage = 15;
  protected _sort: string | null;
  protected _sortDir: SortDirection | null;
  protected _filter: string | null;

<<<<<<< HEAD
  constructor(props: SearchProps = {}) {
    this.page = props.page;
    this.perPage = props.perPage;
    this.sort = props.sort;
    this.sortDir = props.sortDir;
    this.filter = props.filter;
=======
  constructor(props: SearchProps) {
    this._page = props.page;
    this._perPage = props.perPage;
    this._sort = props.sort;
    this._sortDir = props.sortDir;
    this._filter = props.filter;
>>>>>>> b06d353ddd12893135f3aa99825e5fa77d782e98
  }

  get page(): number {
    return this._page;
  }

  private set page(value: number) {
    let _page = +value;
    if (Number.isNaN(_page) || _page <= 0 || parseInt(_page as any) !== _page) {
      _page = 1;
    }

    this._page = _page;
  }

  get perPage(): number {
    return this._perPage;
  }

  private set perPage(value: number) {
<<<<<<< HEAD
    let _perPage = value === (true as any) ? this._perPage : +value;
=======
    let _perPage = +value;
>>>>>>> b06d353ddd12893135f3aa99825e5fa77d782e98

    if (
      Number.isNaN(_perPage) ||
      _perPage <= 0 ||
      parseInt(_perPage as any) !== _perPage
    ) {
      _perPage = this._perPage;
    }

    this._perPage = _perPage;
  }

  get sort(): string {
    return this._sort;
  }

  private set sort(value: string | null) {
    this._sort =
      value === null || value === undefined || value === '' ? null : `${value}`;
  }

  get sortDir(): string {
    return this._sortDir;
  }

  private set sortDir(value: SortDirection) {
    if (!this._sort) {
      this._sortDir = null;
      return;
    }

    const dir = `${value}`.toLowerCase();

    this._sortDir = dir !== 'asc' && dir !== 'desc' ? 'desc' : dir;
  }

  get filter(): string {
    return this._filter;
  }

  private set filter(value: string | null) {
    this._filter =
      value === null || value === undefined || value === '' ? null : `${value}`;
  }
}

<<<<<<< HEAD
export class SearchResult<E extends Entity, Filter = string> {
  readonly items: E[];
  readonly total: number;
  readonly currentPage: number;
  readonly perPage: number;
  readonly lastPage: number;
  readonly sort: string | null;
  readonly sortDir: string | null;
  readonly filter: Filter | null;
  constructor(props: SearchResultProps<E, Filter>) {
    this.items = props.items;
    this.total = props.total;
    this.currentPage = props.currentPage;
    this.perPage = props.perPage;
    this.lastPage = Math.ceil(this.total / this.perPage);
    this.sort = props.sort ?? null;
    this.sortDir = props.sortDir ?? null;
    this.filter = props.filter ?? null;
  }

  toJSON(forceEntity = false) {
    return {
      items: forceEntity ? this.items.map(item => item.toJSON()) : this.items,
      total: this.total,
      currentPage: this.currentPage,
      perPage: this.perPage,
      lastPage: this.lastPage,
      sort: this.sort,
      sortDir: this.sortDir,
      filter: this.filter,
    };
  }
}

export interface SearchableRepositoryInterface<
  E extends Entity,
  Filter = string,
  SearchInput = SearchParams,
  SearchOutput = SearchResult<E, Filter>,
> extends RepositoryInterface<E> {
  search(props: SearchInput): Promise<SearchOutput>;
=======
export interface SearchableRepositoryInterface<
  E extends Entity,
  SearchInput,
  SearchOutput,
> extends RepositoryInterface<E> {
  search(props: SearchParams): Promise<SearchOutput>;
>>>>>>> b06d353ddd12893135f3aa99825e5fa77d782e98
}

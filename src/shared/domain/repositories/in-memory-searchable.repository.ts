import { Entity } from '../entities/entity';
import { NotFoundError } from '../errors/not-found-error';
import { InMemoryRepository } from './in-memory.repository';
import { RepositoryInterface } from './repository-contracts';
import { SearchableRepositoryInterface } from './searchable-repository-contracts';

export abstract class InMemorySearchableRepository<E extends Entity>
  extends InMemoryRepository<E>
  implements SearchableRepositoryInterface<E, any, any>
{
  search(props: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

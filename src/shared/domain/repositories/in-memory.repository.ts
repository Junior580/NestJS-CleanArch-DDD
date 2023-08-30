import { Entity } from '../entities/entity';
import { NotFoundError } from '../errors/not-found-errors';
import { RepositoryInterface } from './repository-contracts';

export abstract class InMemoryRepository<E extends Entity>
  implements RepositoryInterface<E>
{
  items: E[] = [];

  async insert(entity: any): Promise<void> {
    this.items.push(entity);
  }

  async findById(id: string): Promise<E> {
    return this._get(id);
  }

  async findAll(): Promise<any[]> {
    return this.items;
  }

  async update(entity: any): Promise<void> {
    await this._get(entity.id);
    // const index = this.items.findIndex(item => item.id === entity.id);
    const index = await this._findIndex(entity.id);
    this.items[index] = entity;
  }

  async delete(id: string): Promise<void> {
    await this._get(id);
    // const index = this.items.findIndex(item => item.id === id);
    const index = await this._findIndex(id);

    this.items.slice(index, 1);
  }

  protected async _get(id: string): Promise<E> {
    const _id = `${id}`;
    const entity = this.items.find(item => item.id === _id);

    if (!entity) {
      throw new NotFoundError('Entity not found.');
    }

    return entity;
  }

  protected async _findIndex(id: string) {
    return this.items.findIndex(item => item.id === id);
  }
}

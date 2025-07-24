export default class EntityService<T extends { id: number }> {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getAll(): Promise<T[]> {
    throw new Error('Method not implemented');
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    throw new Error('Method not implemented');
  }

  async update(id: number, data: T): Promise<T> {
    throw new Error('Method not implemented');
  }

  async delete(id: number): Promise<void> {
    throw new Error('Method not implemented');
  }
}

import EntityService from './EntityService';

export default class ExpoHttpService<T extends { id: number }> extends EntityService<T> {
  protected async request(url: string, options?: RequestInit) {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  }

  async getAll(): Promise<T[]> {
    return this.request(this.baseUrl);
  }

  async create(data: Omit<T, 'id'>): Promise<T> {
    return this.request(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  async update(id: number, data: T): Promise<T> {
    return this.request(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  }

  async delete(id: number): Promise<void> {
    await this.request(`${this.baseUrl}/${id}`, { method: 'DELETE' });
  }
}

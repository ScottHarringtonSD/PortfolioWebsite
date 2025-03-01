export class Project {
    id: number | undefined;
    name: string = '';
    brief: string = '';
    description: string = '';
    imageUrl: string = '';
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.description) this.description = initializer.description;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.brief) this.brief = initializer.brief;  
    }
  }
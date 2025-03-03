export class Project {
    id: number | undefined;
    name: string = '';
    brief: string = '';
    paragraph1: string = '';
    paragraph2: string = '';
    paragraph3: string = '';
    imageUrl: string = '';
    skills: string = '';
    get isNew(): boolean {
      return this.id === undefined;
    }
  
    constructor(initializer?: any) {
      if (!initializer) return;
      if (initializer.id) this.id = initializer.id;
      if (initializer.name) this.name = initializer.name;
      if (initializer.paragraph1) this.paragraph1 = initializer.paragraph1;
      if (initializer.paragraph2) this.paragraph2 = initializer.paragraph2;
      if (initializer.paragraph3) this.paragraph3 = initializer.paragraph3;
      if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
      if (initializer.brief) this.brief = initializer.brief;  
      if (initializer.skills) this.skills = initializer.skills;  
    }
  }
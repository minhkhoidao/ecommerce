export namespace AuthEntity {
  export interface Register {
    name: string;
    email: string;
    password: string;
    roles?: string[];
  }
}

// autobind decorator
export function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const org_Method = descriptor.value;
  const adj_Descriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = org_Method.bind(this);
      return boundFn;
    },
  };
  return adj_Descriptor;
}

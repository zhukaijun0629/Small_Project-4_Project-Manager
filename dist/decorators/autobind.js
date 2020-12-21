// autobind decorator
export function Autobind(_, _2, descriptor) {
    const org_Method = descriptor.value;
    const adj_Descriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = org_Method.bind(this);
            return boundFn;
        },
    };
    return adj_Descriptor;
}
//# sourceMappingURL=autobind.js.map
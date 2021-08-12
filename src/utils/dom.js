const on = (target, event, ...args) => target.addEventListener(event, ...args)
const off = (target, event, ...args) => target.removeEventListener(event, ...args)

export {
    on,
    off
}
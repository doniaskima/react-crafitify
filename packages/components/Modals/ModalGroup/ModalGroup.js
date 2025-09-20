"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalGroup = void 0;
const react_1 = require("react");
const ModalGroup_context_1 = require("./ModalGroup.context");
const ModalGroup = (props) => {
    const { children } = props;
    const [registry, setRegistry] = (0, react_1.useState)([]);
    const [activeModalId, setActiveModalId] = (0, react_1.useState)(null);
    const contextValue = {
        registry,
        setRegistry,
        activeModalId,
    };
    (0, react_1.useEffect)(() => {
        if (registry.length > 1) {
            const previousModal = registry[registry.length - 2];
            if (!previousModal) {
                return;
            }
            previousModal.animate([
                { opacity: 1, transform: 'translateY(0%)', filter: 'blur(0)', visibility: 'visible' },
                {
                    opacity: 0,
                    transform: 'translateY(-50px)',
                    filter: 'blur(15px)',
                    visibility: 'hidden',
                },
            ], {
                duration: 100,
            });
            previousModal.style.zIndex = '40';
        }
        const activeModal = registry[registry.length - 1];
        if (!activeModal) {
            setActiveModalId(null);
            return;
        }
        activeModal.style.zIndex = '60';
        setActiveModalId(activeModal.id);
    }, [registry]);
    return React.createElement(ModalGroup_context_1.ModalGroupContextProvider, { value: contextValue }, children);
};
exports.ModalGroup = ModalGroup;
ModalGroup.displayName = 'ModalGroup';

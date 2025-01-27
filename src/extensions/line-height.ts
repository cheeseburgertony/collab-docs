import { Extension } from "@tiptap/react";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    lineHeight: {
      setLineHeight: (lineHeight: string) => ReturnType;
      unsetLineHeight: () => ReturnType;
    };
  }
}

export const LineHeightExtension = Extension.create({
  name: "lineHeight",
  addOptions() {
    return {
      types: ["paragraph", "heading"],
      defaultLineHeight: "normal",
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: this.options.defaultLineHeight,
            parseHTML: (element) =>
              element.style.lineHeight || this.options.defaultLineHeight,
            renderHTML: (attributes) => {
              if (!attributes.lineHeight) return {};
              return {
                style: `line-height: ${attributes.lineHeight}`,
              };
            },
          },
        },
      },
    ];
  },
  addCommands() {
    return {
      setLineHeight:
        (lineHeight: string) =>
        ({ tr, state, dispatch }) => {
          // 获取当前选中的节点
          const { selection } = state;
          // 确保当前事务的选区和当前状态的选区一致
          tr = tr.setSelection(selection);

          const { from, to } = selection;
          // 遍历选区内的所有节点
          state.doc.nodesBetween(from, to, (node, pos) => {
            // 传递节点 node 和其在文档中的位置 pos，如果节点的类型在 options.types 中，就更新节点的属性
            if (this.options.types.includes(node.type.name)) {
              // 通过事务tr.setNodeMarkup更新节点的标记，更新节点的lineHeight属性
              tr = tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight,
              });
            }
          });

          // 如果存在 dispatch 函数，则将事务 tr 提交到编辑器中，应用变更，返回 true 表示更新成功
          if (dispatch) dispatch(tr);
          return true;
        },
      unsetLineHeight:
        () =>
        ({ tr, state, dispatch }) => {
          const { selection } = state;
          tr = tr.setSelection(selection);

          const { to, from } = selection;
          state.doc.nodesBetween(from, to, (node, pos) => {
            if (this.options.types.includes(node.type.name)) {
              tr = tr.setNodeMarkup(pos, undefined, {
                ...node.attrs,
                lineHeight: this.options.defaultLineHeight,
              });
            }
          });

          if (dispatch) dispatch(tr);
          return true;
        },
    };
  },
});

import { parseAsString, useQueryState } from "nuqs";

export const useSearchParam = () => {
  return useQueryState(
    "search",
    // withDefault 代表默认值为''
    // 默认值为''时，可能只剩下?key=,所以设置 clearOnDefault ,URL中的?key=会被清除
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
};

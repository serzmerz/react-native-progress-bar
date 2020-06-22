import { useCallback, useState } from "react";

export default function useOnLayout() {
  const [layout, setLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const onLayout = useCallback(
    (event) => setLayout(event.nativeEvent.layout),
    []
  );

  return [layout, onLayout];
}

import React from "../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";

export default function withLayout(LayoutComponent) {
  return Component => props => (
    <LayoutComponent>
      <Component {...props} />
    </LayoutComponent>
  );
}

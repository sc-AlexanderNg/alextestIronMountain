import { BaseSyntheticEvent } from 'react';

export type RegionProps = {
  onMouseEnter: (e: BaseSyntheticEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: BaseSyntheticEvent) => void;
  isSelectable: boolean;
};

export const NorthAmericaSVG = (props: RegionProps) => {
  const compName = 'northamericaregion';

  return (
    <g
      onMouseEnter={(e) => props.onMouseEnter(e)}
      onMouseLeave={() => props.onMouseLeave()}
      onClick={(e) => props.onClick(e)}
      data-is-selectable={props.isSelectable}
      data-clickable-id={`${compName}-details`}
      data-clickable-action={props.isSelectable}
    >
      <g>
        <rect id="NA" x="60" y="-7" width="430" height="210" fill="red" />
      </g>
    </g>
  );
};

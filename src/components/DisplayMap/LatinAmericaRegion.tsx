import { BaseSyntheticEvent } from 'react';

export type RegionProps = {
  onMouseEnter: (e: BaseSyntheticEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: BaseSyntheticEvent) => void;
  isSelectable: boolean;
};

export const LatinAmericaSVG = (props: RegionProps) => {
  const compName = 'latinamericaregion';

  return (
    <g
      onMouseEnter={(e) => props.isSelectable && props.onMouseEnter(e)}
      onMouseLeave={() => props.isSelectable && props.onMouseLeave()}
      onClick={(e) => props.isSelectable && props.onClick(e)}
      data-is-selectable={props.isSelectable}
      data-clickable-id={`${compName}-details`}
      data-clickable-action={props.isSelectable}
    >
      <g>
        <rect
          id="LATAM"
          x="140"
          y="170"
          width="300"
          height="330"
          fill="#2E68A5"
        />
      </g>
    </g>
  );
};

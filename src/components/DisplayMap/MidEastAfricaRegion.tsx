import { BaseSyntheticEvent } from 'react';

export type RegionProps = {
  onMouseEnter: (e: BaseSyntheticEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: BaseSyntheticEvent) => void;
  isSelectable: boolean;
};

export const MidEastAfricaSVG = (props: RegionProps) => {
  const compName = 'mideastafricaregion';

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
        <rect id="EMEA" x="450" y="7" width="260" height="420" fill="purple" />
      </g>
    </g>
  );
};

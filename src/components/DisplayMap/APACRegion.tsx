import { BaseSyntheticEvent } from 'react';

export type RegionProps = {
  onMouseEnter: (e: BaseSyntheticEvent) => void;
  onMouseLeave: () => void;
  onClick: (e: BaseSyntheticEvent) => void;
  isSelectable: boolean;
};

export const APACRegionSVG = (props: RegionProps) => {
  const compName = 'apacregion';

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
        <rect id="APAC" x="710" y="90" width="400" height="380" fill="yellow" />
      </g>
    </g>
  );
};

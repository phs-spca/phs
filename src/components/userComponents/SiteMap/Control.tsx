import L from 'leaflet';
import React, { useState, createRef, useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface ControlProps {
  position: 'bottomleft' | 'bottomright' | 'topleft' | 'topright';
  children?: React.ReactNode;
  container?: React.HTMLAttributes<HTMLDivElement>;
  prepend?: boolean;
}

const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

/**
 * Custom control component for Leaflet maps using React.
 * @param props - The properties object.
 * @param props.position - The position of the control on the map.
 * @param [props.children] - The child elements to be rendered inside the control.
 * @param [props.container] - Additional HTML attributes for the control container.
 * @param [props.prepend] - Whether to prepend the control to the container.
 * @returns The custom control component.
 */
function Control({
  position,
  children,
  container,
  prepend,
}: ControlProps): JSX.Element {
  const [portalRoot, setPortalRoot] = useState<HTMLElement>(
    document.createElement('div'),
  );
  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;
  const controlContainerRef = createRef<HTMLDivElement>();
  const map = useMap();

  /**
   * Whenever the control container ref is created,
   * ensure the click/scroll propagation is removed.
   * This way click/scroll events do not bubble down to the map.
   */
  useEffect(() => {
    if (controlContainerRef.current !== null) {
      L.DomEvent.disableClickPropagation(controlContainerRef.current);
      L.DomEvent.disableScrollPropagation(controlContainerRef.current);
    }
  }, [controlContainerRef]);

  /**
   * Whenever the position is changed, go ahead and get the container of the map
   * and the first instance of the position class in that map container.
   */
  useEffect(() => {
    const mapContainer = map.getContainer();
    const targetDiv = mapContainer.getElementsByClassName(positionClass)[0];
    if (targetDiv) {
      setPortalRoot(targetDiv as HTMLElement);
    }
  }, [positionClass, map]);

  /**
   * Whenever the portal root is complete,
   * append or prepend the control container to the portal root.
   */
  useEffect(() => {
    if (portalRoot && controlContainerRef.current) {
      if (prepend !== undefined && prepend === true) {
        portalRoot.prepend(controlContainerRef.current);
      } else {
        portalRoot.append(controlContainerRef.current);
      }
    }
  }, [portalRoot, prepend, controlContainerRef]);

  /**
   * Concatenate the props.container className to the class of the control div,
   * per Leaflet's built-in styles.
   * Will need to change styling of the component itself based on screen breakpoints.
   */
  const className = `${container?.className?.concat(' ') || ''}leaflet-control`;

  return (
    <div {...container} ref={controlContainerRef} className={className}>
      {children}
    </div>
  );
}

export default Control;

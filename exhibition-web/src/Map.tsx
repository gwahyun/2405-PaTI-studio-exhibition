import { MutableRefObject, useEffect, useRef } from 'react';

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        kakao: any;
    }
}

function Map() {
    const mapRef = useRef<HTMLElement | null>(null);

    const initMap = () => {
        const container = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(37.56511383013535, 126.952837399),
            level: 2,
        };

        const map = new window.kakao.maps.Map(container as HTMLElement, options);

        const marker = new window.kakao.maps.Marker({
            // 지도 중심좌표에 마커를 생성합니다 
            position: map.getCenter()
        });

        // 지도에 마커를 표시합니다
        marker.setMap(map);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (mapRef as MutableRefObject<any>).current = map;
    };

    useEffect(() => {
        window.kakao.maps.load(() => initMap());
    }, [mapRef]);

    return <div id="map" className='w-[380px] h-[380px] sm:w-[600px]'></div>;
}

export default Map;
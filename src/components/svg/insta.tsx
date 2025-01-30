import React from "react";

interface Props {
  size: number;
  color: string;
}

const PixelInsta = ({ size, color }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 33 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_1128_19866)">
        <path d="M31.3201 3.04999V10.67H20.6601V12.19H22.1801V13.71H23.7001V12.19H31.3201V28.95H32.8501V3.04999H31.3201Z" />
        <path d="M31.3201 28.95H29.8001V30.48H31.3201V28.95Z" />
        <path d="M31.3201 1.51999H29.8001V3.04999H31.3201V1.51999Z" />
        <path d="M29.8001 30.48H3.89008V32H29.8001V30.48Z" />
        <path d="M28.2701 4.57001H26.7501V7.62001H28.2701V4.57001Z" />
        <path d="M26.7501 3.04999H23.7001V4.56999H26.7501V3.04999Z" />
        <path d="M25.2301 13.71H23.7001V21.33H25.2301V13.71Z" />
        <path d="M26.7501 7.62H23.7001V9.14H26.7501V7.62Z" />
        <path d="M23.7001 21.33H22.1801V22.86H23.7001V21.33Z" />
        <path d="M23.7001 4.57001H22.1801V7.62001H23.7001V4.57001Z" />
        <path d="M22.1801 22.86H20.6601V24.38H22.1801V22.86Z" />
        <path d="M13.0401 15.24H11.5101V19.81H13.0401V21.33H14.5601V22.86H19.1301V21.33H20.6601V19.81H22.1801V15.24H20.6601V13.71H19.1301V12.19H14.5601V13.71H13.0401V15.24ZM16.0801 15.24H19.1301V18.29H17.6101V16.76H16.0801V15.24Z" />
        <path d="M20.6601 9.14001H13.0401V10.67H20.6601V9.14001Z" />
        <path d="M20.6601 24.38H13.0401V25.9H20.6601V24.38Z" />
        <path d="M13.0401 22.86H11.5101V24.38H13.0401V22.86Z" />
        <path d="M11.5101 21.33H9.99011V22.86H11.5101V21.33Z" />
        <path d="M9.99008 13.71H8.46008V21.33H9.99008V13.71Z" />
        <path d="M3.89012 28.95H2.37012V30.48H3.89012V28.95Z" />
        <path d="M2.3701 12.19H3.8901V13.71H8.4601V12.19H9.9901V13.71H11.5101V12.19H13.0401V10.67H11.5101V1.52H29.8001V0H3.8901V1.52H2.3701V3.05H3.8901V10.67H2.3701V3.05H0.850098V28.95H2.3701V12.19ZM8.4601 1.52H9.9901V10.67H8.4601V1.52ZM5.4201 1.52H6.9401V10.67H5.4201V1.52Z" />
      </g>
      <defs>
        <clipPath id="clip0_1128_19866">
          <rect
            width="32"
            height="32"
            fill="white"
            transform="translate(0.850098)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PixelInsta;

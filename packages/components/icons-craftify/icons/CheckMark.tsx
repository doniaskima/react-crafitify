import React from 'react';

 
interface CheckMarkProps {
  size: number;
  color: string;
}

const CheckMark: React.FC<CheckMarkProps> = (props) => {

  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 1240 1240"
      xmlns="http://www.w3.org/2000/svg" >
      <g id="_ionicons_svg_ios-checkmark" transform="translate(157.000000, -1030.000000)" fill={props.color}>
        <path d="M595.120147,1918.62015 L343.120147,1918.62015 C318.819618,1918.62015 299.120147,1898.92068 299.120147,1874.62015 C299.120147,1850.31962 318.819618,1830.62015 343.120147,1830.62015 L551.120147,1830.62015 L551.120147,1241.62015 C551.120147,1217.31962 570.819618,1197.62015 595.120147,1197.62015 C619.420676,1197.62015 639.120147,1217.31962 639.120147,1241.62015 L639.120147,1874.62015 C639.120147,1898.92068 619.420676,1918.62015 595.120147,1918.62015 Z" id="Combined-Shape" transform="translate(469.120147, 1558.120147) rotate(45.000000) translate(-469.120147, -1558.120147) "></path>
      </g>
    </svg>
  )
}

export default CheckMark;

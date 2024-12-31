import { JSX, SVGProps } from "react"

const PigNose = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="-6.4 -6.4 76.80 76.80"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      className="iconify iconify--emojione-monotone"
      preserveAspectRatio="xMidYMid meet"
      fill="#1B202B"
      stroke="#1B202B"
      strokeWidth="1.024"
      transform="matrix(1, 0, 0, 1, 0, 0) rotate(0)"
      {...props} // Spread props for customization
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.536"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M32 10C13.776 10 2 20.75 2 37.387c0 6.971 2.046 11.558 6.255 14.023c3.671 2.15 8.7 2.59 15.12 2.59c1.333 0 2.707-.018 4.115-.034c2.939-.037 6.08-.037 9.02 0c1.407.016 2.781.034 4.114.034C52.319 54 62 52.75 62 37.387C62 20.75 50.225 10 32 10m8.624 42c-1.325 0-2.69-.018-4.09-.034c-1.478-.019-2.991-.037-4.534-.037s-3.057.019-4.535.037c-1.399.016-2.765.034-4.09.034c-6.095 0-10.827-.395-14.109-2.316C5.673 47.58 4 43.672 4 37.387C4 18.669 18.464 12 32 12s28 6.669 28 25.387C60 50.951 51.969 52 40.624 52"
          fill="#1B202B"
        ></path>
        <path
          d="M19.051 20.044c-3.926 0-7.102 6.088-7.102 13.604c0 7.518 3.176 13.607 7.102 13.607c3.921 0 7.096-6.09 7.096-13.607c-.001-7.516-3.175-13.604-7.096-13.604"
          fill="#1B202B"
        ></path>
        <path
          d="M44.936 20.044c-3.926 0-7.102 6.088-7.102 13.604c0 7.518 3.176 13.607 7.102 13.607c3.921 0 7.096-6.09 7.096-13.607c-.001-7.516-3.176-13.604-7.096-13.604"
          fill="#1B202B"
        ></path>
      </g>
    </svg>
  )
}

export default PigNose

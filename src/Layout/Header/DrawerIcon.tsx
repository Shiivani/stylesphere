const DrawerIcon = ({handleClick}: {handleClick: () => void}) => {
  return (
    <button
      className="flex justify-center transform items-center p-2 max-w-full rounded cursor-pointer active:scale-95 border-primary-700 active:bg-gray-50 transition-all duration-300 relative border-0 overflow-hidden hover:shadow-none text-primary-700"
      type="button"
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-8 h-8"
      >
        <g
          fill="currentColor"
          transform="translate(0, 512) scale(0.1, -0.1)"
          stroke="0"
        >
          <path d="M590 4261 c-104 -32 -160 -106 -160 -211 0 -84 53 -161 132 -194 33 -14 197 -16 1465 -16 l1428 0 52 25 c39 18 60 36 82 71 58 90 50 183 -21 260 -73 79 34 74 -1547 73 -773 0 -1417 -4 -1431 -8z"></path>
          <path d="M539 2747 c-24 -13 -57 -43 -74 -66 -27 -39 -30 -50 -30 -120 0 -68 3 -82 27 -117 15 -21 44 -50 65 -64 l37 -25 1996 0 1996 0 37 25 c21 14 50 43 65 64 24 35 27 49 27 116 0 67 -3 81 -27 116 -15 21 -44 50 -65 64 l-37 25 -1986 3 -1987 2 -44 -23z"></path>
          <path d="M566 1265 c-87 -31 -142 -121 -134 -219 6 -70 42 -126 105 -163 l48 -28 1015 0 1015 0 48 28 c126 74 144 244 37 341 -21 19 -56 39 -77 45 -26 7 -360 11 -1028 11 -816 -1 -997 -3 -1029 -15z"></path>
        </g>
      </svg>
    </button>
  );
};

export default DrawerIcon;

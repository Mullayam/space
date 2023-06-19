import React from 'react'

type Props = {}

const Animated = (props: Props) => {
    return (
      <div>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <path
            d="M 20 20 L 180 180 M 20 180 L 180 20"
            stroke="#333"
            strokeWidth="10"
            strokeLinecap="round"
            stroke-dasharray="0 200"
            stroke-dashoffset="0"
          >
            <animate
              attributeName="stroke-dasharray"
              from="0 200"
              to="200 200"
              dur="2s"
              begin="0s"
              fill="freeze"
            />
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="200"
              dur="2s"
              begin="0s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>
    );
}

export default Animated
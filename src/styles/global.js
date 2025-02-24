import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;

        /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
}
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
`;

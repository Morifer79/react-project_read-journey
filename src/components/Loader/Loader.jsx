import { Book, Inner, LeftPart, LoaderBox, MiddlePart, RightPart } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderBox>
      <Book>
        <Inner>
          <LeftPart/>
          <MiddlePart/>
          <RightPart/>
        </Inner>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </Book>
    </LoaderBox>
  );
};

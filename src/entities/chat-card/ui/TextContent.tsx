import styled from '@emotion/native';
import { ITextContent } from './types';

const TextContentStyled = styled.View`
  margin-left: 10px;
  width: 100%;
`;
const TitleContainer = styled.View`
  display: block;
  width: 60%;
`;
const CardTitle = styled.Text`
  font-size: ${props => props.theme.fontSize.subtitle};
  color: ${props => props.theme.color.text};
`;
const TextContainer = styled.View`
  width: 80%;
`;
const CardText = styled.Text`
  font-size: ${props => props.theme.fontSize.text};
  color: ${props => props.theme.color.accent};
`;

export const TextContent = ({ title, text }: ITextContent) => {
  return (
    <TextContentStyled>
      <TitleContainer>
        <CardTitle numberOfLines={1} ellipsizeMode="tail">
          {title}
        </CardTitle>
      </TitleContainer>
      <TextContainer>
        <CardText numberOfLines={2} ellipsizeMode="tail">
          {text}
        </CardText>
      </TextContainer>
    </TextContentStyled>
  );
};

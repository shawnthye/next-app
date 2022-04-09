type ReactComponentProps = {
  children?: ReactNode | ReactNode[];
};

type ReactFC<P = {}> = React.FC<ReactComponentProps & P>;

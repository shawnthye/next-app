import {
  Box,
  FormControl,
  Paper,
  SxProps,
  TextField,
  Theme,
  useTheme,
} from '@mui/material';
import { NextPage } from 'next/types';
import React from 'react';
import { Url } from 'url';
import Table from '../../js/@core/elements/table';

const DEFAULT_URL =
  'zalora://sg/urlc/product/?categoryId=13327&categoryId=13328&categoryId=13329&categoryId=13330&categoryId=13331&categoryId=13332&categoryId=13290&categoryId=13293&categoryId=13294&categoryId=13295&categoryId=13300&categoryId=13301&categoryId=13302&catalogtype=Main&specialKey=all&special-url=all-products&segment=sports';

const isUrlValid = (input: string): boolean => {
  try {
    new URL(input);
    return true;
  } catch (_) {
    return false;
  }
};

const findCategoryIds = (url: URL): number[] => {
  const categoryIds = Array.from(url.searchParams)
    .filter(([key]) => {
      return key.toLowerCase() === 'categoryid';
    })
    .map(([_, value]) => parseInt(value));

  return categoryIds;
};

const Section: ReactFC<{ sx?: SxProps<Theme> }> = ({ children, sx }) => {
  const theme = useTheme();

  return (
    <Paper
      variant="outlined"
      sx={{
        ...(sx || {}),
        marginTop: theme.spacing(2),
        padding: theme.spacing(2),
      }}>
      {children}
    </Paper>
  );
};

type UrlProps = {
  url?: URL | undefined;
};

const RawUrl: React.FC<UrlProps> = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <Section sx={{ wordBreak: 'break-all' }}>
      <div>{`${url.protocol}${url.pathname}`}</div>
      <div>{url.search}</div>
    </Section>
  );
};

const CategoryIds: React.FC<UrlProps> = ({ url }) => {
  if (!url) {
    return null;
  }

  const ids = findCategoryIds(url).map((id, index) => (
    <div key={index}>{id}</div>
  ));

  return <Section>{ids}</Section>;
};

const Categories: NextPage = () => {
  const theme = useTheme();

  const [url, setUrl] = React.useState<URL | undefined>();

  return (
    <>
      <Box
        component={'form'}
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();

          const target = e.target as typeof e.target & {
            url: { value: string };
          };

          if (isUrlValid(target.url.value)) {
            setUrl(new URL(target.url.value));
          }
        }}>
        <FormControl fullWidth>
          <TextField
            name="url"
            type={'url'}
            label="Deep link"
            variant="filled"
            defaultValue={DEFAULT_URL}
          />
        </FormControl>
      </Box>
      <RawUrl url={url} />
      <CategoryIds url={url} />
      <div style={{ marginTop: theme.spacing(3) }}>
        <Table />
      </div>
    </>
  );
};

export default Categories;

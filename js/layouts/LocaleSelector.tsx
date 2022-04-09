import { FormControl, MenuItem, Select } from '@mui/material';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
import { useRouter } from 'next/router';

const LocaleSelector = () => {
  const {
    locales = ['sg'],
    locale,
    pathname,
    query,
    asPath,
    ...router
  } = useRouter();

  const onChange: SelectInputProps<string>['onChange'] = ({
    target: { value },
  }) => {
    router.push({ pathname, query }, asPath, { locale: value });
  };

  const items = locales.map(it => {
    return (
      <MenuItem key={it} value={it}>
        {it.toLocaleUpperCase()}
      </MenuItem>
    );
  });

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <Select value={locale} displayEmpty onChange={onChange} sx={{ m: 1 }}>
        {items}
      </Select>
    </FormControl>
  );
};

export default LocaleSelector;

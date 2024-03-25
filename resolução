import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Hardware Model 1',
  'Hardware Model 2',
  'Hardware Model 3',
  'Hardware Model 4',
  'Hardware Model 5',
  'Hardware Model 6',
  'Hardware Model 7',
  'Hardware Model 8',
  'Hardware Model 9',
  'Hardware Model 10',
];

export default function MultipleSelectCheckmarks() {
  const [hardwareModel, setHardwareModel] = React.useState([]);
  const [selectAll, setSelectAll] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [projectName, setProjectName] = React.useState('');
  const [protocol, setProtocol] = React.useState('');

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.includes('selectAll')) {
      setHardwareModel(value === 'selectAll' ? names : []);
      setSelectAll(value === 'selectAll');
    } else {
      setHardwareModel(value);
      setSelectAll(false);
    }
    setError(false);
  };

  const handleToggleAll = () => {
    const allNames = selectAll ? [] : names;
    setHardwareModel(allNames);
    setSelectAll(!selectAll);
    setError(false);
  };

  const handleSubmit = () => {
    if (hardwareModel.length === 0 || !projectName || !protocol) {
      setError(true);
    } else {
      const formData = {
        hardwareModel,
        projectName,
        protocol,
      };

      console.log('Sending to API:', formData);
      // Fazer aqui a chamada da API
    }
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Hardware Model</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={hardwareModel}
          onChange={handleChange}
          input={<OutlinedInput label="Hardware Model" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
          error={error}
        >
          <MenuItem key="selectAll" value="selectAll">
            <Checkbox checked={selectAll} onChange={handleToggleAll} />
            <ListItemText primary="Select All" />
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={hardwareModel.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
        {error && <p style={{ color: 'red' }}>Please fill the all input</p>}
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel htmlFor="project-name">Project Name</InputLabel>
        <OutlinedInput
          id="project-name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          label="Project Name"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel htmlFor="protocol">Protocol</InputLabel>
        <OutlinedInput
          id="protocol"
          value={protocol}
          onChange={(e) => setProtocol(e.target.value)}
          label="Protocol"
        />
      </FormControl>
      <Button variant="contained" onClick={handleSubmit} disabled={hardwareModel.length === 0}>
        Submit
      </Button>
    </div>
  );
}

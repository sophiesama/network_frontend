import { Radio } from 'antd';

const options = [
  { label: '核心网' , value: 1 },
  { label: '接入网', value: 2 },
  { label: '应用', value: 3 },
]
const NetSelector = ({netType, selectLabel}) => {
  return (
    <Radio.Group
      options={options}
      onChange={selectLabel}
      value={netType}
      optionType="button"
    />
  )
}

export default NetSelector
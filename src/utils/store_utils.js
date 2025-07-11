export const store_local_data = async (key, value) => {
  const updated_values = JSON.stringify(value);
  await mmkv.store(key, updated_values);
};

export const get_local_data = async key => {
  const value = await mmkv.get(key);
  return value ? JSON.parse(value) : null;
};


  const localeSettings = {};
  dayjs.locale(localeSettings);
  $(function () {
    const currentHour = dayjs().format('H');
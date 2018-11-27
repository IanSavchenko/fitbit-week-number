function Settings(props) {
  return (
    <Section>
      <Select
        label={`First day of the week`}
        selectViewTitle={`First day of the week`}
        settingsKey="firstDayOfWeek"
        options={[
          {name: "Auto", value: "auto"},
          {name: "Sunday", value: "sunday"},
          {name: "Monday", value: "monday"},
        ]}
      />
      <Text>
        Auto means that we will use the value from Fitbit app settings.
      </Text>
    </Section>
  );
}

registerSettingsPage(Settings);

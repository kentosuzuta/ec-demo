"use client";

import { Tab, Tabs } from "@mui/material";

type ProductCategoryTabProps = {
  categories: string[];
  selected: string;
  handleSelect: (value: string) => void;
};

export default function ProductCategoryTab({
  categories,
  selected,
  handleSelect,
}: ProductCategoryTabProps) {
  return (
    <Tabs
      value={selected}
      onChange={(_, v) => handleSelect(v)}
      variant="scrollable"
      scrollButtons="auto"
      sx={{
        minHeight: 40,
        "& .MuiTab-root": { minHeight: 40, textTransform: "none" },
      }}
    >
      {categories.map((c) => (
        <Tab key={c} label={c} value={c} />
      ))}
    </Tabs>
  );
}

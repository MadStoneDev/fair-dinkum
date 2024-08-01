import SettingsBlock from "@/components/settings-block";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { PRIVACY_LEVELS } from "@/data/privacy-levels";
import { IconSelector } from "@tabler/icons-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check } from "lucide-react";
import React from "react";

export default function SettingsPrivacy(props: any) {
  const {
    askAnonymously,
    setAskAnonymously,
    allowSensitiveQuestions,
    setAllowSensitiveQuestions,
    allowSensitiveAnswers,
    setAllowSensitiveAnswers,
    showAnswersTo,
    setShowAnswersTo,
    openShowAnswersTo,
    setOpenShowAnswersTo,
    unBlurSensitiveContent,
    setUnBlurSensitiveContent,
  } = props;

  return (
    <>
      {/* Ask Anonymously */}
      <SettingsBlock
        blockTitle="Ask Anonymously by Default"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Switch
              onCheckedChange={setAskAnonymously}
              checked={askAnonymously}
            />
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Show Answers */}
      <SettingsBlock
        blockTitle="Show Answers to"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Popover
              open={openShowAnswersTo}
              onOpenChange={setOpenShowAnswersTo}
            >
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={openShowAnswersTo}
                  className="w-[200px] justify-between"
                >
                  {showAnswersTo
                    ? PRIVACY_LEVELS.find(
                        (level) => level.value === showAnswersTo,
                      )?.label
                    : "Select privacy level..."}
                  <IconSelector className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandEmpty>No privacy level found.</CommandEmpty>
                  <CommandList>
                    <CommandGroup>
                      {PRIVACY_LEVELS.map((level) => (
                        <CommandItem
                          key={`show-answers-to-${level.value}`}
                          value={level.value}
                          onSelect={(currentValue) => {
                            setShowAnswersTo(
                              currentValue === showAnswersTo
                                ? ""
                                : currentValue,
                            );
                            setOpenShowAnswersTo(false);
                          }}
                        >
                          <Check
                            className={`mr-2 h-4 w-4 ${
                              showAnswersTo === level.value
                                ? "opacity-100"
                                : "opacity-0"
                            }`}
                          />
                          {level.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Allow Sensitive Questions */}
      <SettingsBlock
        blockTitle="Allow others to ask me sensitive questions"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Switch
              onCheckedChange={setAllowSensitiveQuestions}
              checked={allowSensitiveQuestions}
            />
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* Allow Sensitive Answers  */}
      <SettingsBlock
        blockTitle="Allow answers that contain sensitive content on my feed"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Switch
              onCheckedChange={setAllowSensitiveAnswers}
              checked={allowSensitiveAnswers}
            />
          </>
        }
      />

      {/* Separator */}
      <div className={`w-full h-[0.05rem] bg-dark/10`}></div>

      {/* UnBlur Sensitive Content */}
      <SettingsBlock
        blockTitle="Unblur sensitive content on my feed by default"
        blockDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisi"
        action={
          <>
            <Switch
              onCheckedChange={setUnBlurSensitiveContent}
              checked={unBlurSensitiveContent}
            />
          </>
        }
      />
    </>
  );
}

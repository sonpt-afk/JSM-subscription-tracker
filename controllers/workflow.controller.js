import { createRequire } from "module";
import dayjs from "dayjs";
import Subscription from "../models/subscription.model.js";
const require = createRequire(import.meta.url);
const { serve } = require("@upstash/workflow/express");

const REMINDERS = [7, 5, 2, 1]; // days before renewal date
export const sendReminder = serve(async (context) => {
  const { subscriptionId } = context.requestPayload;
  const subscription = await fetchSubscription(context, subscriptionId);

  if (!subscription || subscription.status !== active) return;

  const renewalDate = dayjs(subscription.renewalDate);

  if (renewalDate.isBefore(dayjs())) {
    console.log(
      `renewal date has passed for subscription ${subscriptionId}. Stopping workflow.`
    );
    return;
  }

  for (const daysBefore of REMINDERS) {
    const reminderDate = renewalDate.subtract(daysBefore, "day");
    //renewal date = 22feb reminder date = 15,20,21

    if (reminderDate.isAfter(dayjs())) {
    }
  }
});

const fetchSubscription = async (context, subscriptionId) => {
  return await context.run("get subscription", () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });
};

const sleepUntilReminder = async (context, label, date) => {
  console.log(`Sleeping until ${label} reminder at ${date}`);
};

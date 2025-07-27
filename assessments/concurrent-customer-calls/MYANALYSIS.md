# Problem Statement

We get all the customer call records as a list of objects.

the customer calls will be billed separately on different days, so calls that happen on the same day are billed together, But calls that *span multiple days* are *billed separately*.

If a call spans two or more days, we will split that call into multiple calls, the first call will end at the timestamp of the first day, the second call will start at the timestamp of the second day, and so on, the last call will always end at the timestamp of the original call.

In summary we need to get
Customer? -> Date? -> Call? -> Duration? -> Does it overlap with other calls on the same day?

- We also need to group customer records by their id.
- We need to group calls by their date.
- We can find the overlapping calls by
  - ABC
  
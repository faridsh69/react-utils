add js codes for is Array
add filtering with api search

# react-utils

how to install
npm i @faridsh69/react-utils@latest

the way to use common css blocks
@import '@react-utils/utils/scss/common';

The way to test package: inside package run these commands
1 npm run build;
2 yalc publish --push

inside your other app run:
3 yalc link @react-utils/utils

---

1

1. micro frontend container
2. micro frontend service
3. package
   components + 1 button + 2 input + 5 checkbox + 4 tooltip + 6 radio + 7 menu + 8 popover + 9 select
   10 form + 11 label + 12 modal + 13 loading
   14 table + 15 textarea + 16 toast => use toaster + 17 skeleton => use skeleton + 18 toggle + 19 NotFound + 20 Error boundry + 21 Confirm + 22 Image + 23 suspender
   helpers
   1 usecrud: handle create/read/update/delete, do optimistic update, toast messages, handle exceptions, do caching, manage query keys
   2 createApiInstance: manipulating response, injecting bearer tokan, do refresh token, having types
   3 Bootstrap grid system
   4 custom hooks: helper

Okay, auth structure is good to go, so let's explain the steps

first we use redux to handle the state of step we are in, whether we are at login or emailverification step
and isOpen is for the the dialog open/close.

you can call those by calling useAppSelector or useAppDispatch

for starter, i'm gonna create a test route for this whole setup, routes/auth-test.ts

each dev is to create ui corresponding to the design, eg. if i choose login form ui, then i can just start buiding in the `loginStep.tsx` and they will be wraped under dialog content in the `authPortal`.
for that please read the shadcn/components/dialog for better understanding.

we are only gonna use one dialog for every step. (you can see it in the `authPortal`)

please create a feat branch as we pinned in the group, and also change the step state in the slice.ts to your own states, you can check your states in the types/authStates

and don't forget to change it back to "login" after you finish your ui component.

don't worry about the circle shape.

Thanks

### UPDATE Dynamic Step Indicator

Dynamic Step Indicator is done so those who take on steps such as `nameRole, techStack`, please import the useStepIndicator and StepIndicatro and implement them. 

I have implemented them in `accountInfo` step so, if you are not sure about the flow, you can just either ask me or browse the codes. I'll be happy to explain. 

### UPDATE LANDING PAGE AND HEADER  

So, after implement landing page and header components, for devs who are working on the seperate popup ui components, to get to the desire popup, here are the stpes

- first change the url to `/auth-test`
- change the open prop in `authPortal` to true in while you are at it, then change it back before pushing
- this step is the same, change the step state of your own choosing

## note please change it back to default values before pushing and when you create a pull request, please double check to make sure it is directed to `dev' not `main'

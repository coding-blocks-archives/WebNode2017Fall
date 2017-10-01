
process.nextTick(() => {
    console.info('next tick')
    process.nextTick(() => {
        console.info('next of next tick')
    })
})

process.nextTick(() => {
    console.info('this tick')
})

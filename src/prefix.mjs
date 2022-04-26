import chalk from 'chalk';

export default {
    info: chalk.grey('[') + chalk.blue('  INFO ') + chalk.grey(']'),
    success: chalk.grey('[') + chalk.green('SUCCESS') + chalk.grey(']'),
    error: chalk.grey('[') + chalk.red(' ERROR ') + chalk.grey(']'),
    time: () => {
        return chalk.grey('[') + chalk.dim(new Date().toISOString()) + chalk.grey(']')
    },
    methods: {
        get: chalk.grey('[') + '  GET ' + chalk.grey(']'),
    }
}

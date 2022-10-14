import webpack from 'webpack';

export function buildReselvers(): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        }
}
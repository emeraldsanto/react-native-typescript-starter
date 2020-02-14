import { StackCardInterpolationProps, StackCardStyleInterpolator } from '@react-navigation/stack';

export const modalStyleInterpolator : StackCardStyleInterpolator = (props : StackCardInterpolationProps) => {
    const { current, layouts } = props;
    
    return {
        cardStyle : {
            opacity : current.progress.interpolate({
                inputRange : [0, 1],
                outputRange : [0.75, 1]
            }),
            transform :[{ 
                translateY : current.progress.interpolate({
                    inputRange : [0, 1],
                    outputRange : [layouts.screen.height, 0]
                }) 
            }]
        },

        overlayStyle : {
            opacity : current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
            })
        }
    };
}
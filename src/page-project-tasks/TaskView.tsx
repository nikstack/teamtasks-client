import React from 'react';
import Task from "../model/Task";
import {Card, CardActionArea, CardContent, Grid, Typography as T} from "@material-ui/core";

interface Props {
    task: Task;
    showTaskDetails: (taskId: number) => void;
}

export default function TaskView({task, showTaskDetails}: Props) {
    return (
        <Card onClick={() => {showTaskDetails(task.id)}}>
            <CardActionArea>
                <CardContent>
                    <T gutterBottom variant="h5" component="h2">
                        {task.title}
                    </T>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <T variant="body2" color="textSecondary" component="p">
                                {}
                            </T>
                        </Grid>
                        <Grid item xs={9}>

                        </Grid>
                    </Grid>

                </CardContent>
            </CardActionArea>
        </Card>
    )
};